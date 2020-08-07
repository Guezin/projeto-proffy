import { getConnection, Brackets } from 'typeorm';

import converHourToMinutes from '../../utils/convertHourToMinutes';

import ClassesSchedules from '../../entities/ClassesSchedules';

interface IRequest {
  week_day: string;
  subject: string;
  time: string;
}

class ListClassesService {
  public async execute({
    week_day,
    subject,
    time,
  }: IRequest): Promise<ClassesSchedules[]> {
    if (!week_day || !subject || !time) {
      throw new Error('Preencha o filtro para buscar aulas!');
    }

    const formattedTime = converHourToMinutes(time);

    const classes = await getConnection()
      .createQueryBuilder()
      .select('classes_schedules')
      .addSelect('classes')
      .from(ClassesSchedules, 'classes_schedules')
      .where(
        new Brackets(qb => {
          qb.where('classes_schedules.week_day = :week_day', {
            week_day,
          }).andWhere('classes_schedules.from = :time', {
            time: formattedTime,
          });
        })
      )
      .andWhere('classes.subject = :subject', { subject })
      .innerJoinAndSelect(
        'classes_schedules.class_id',
        'classes',
        'classes_schedules.class_id = classes.id'
      )
      .innerJoinAndSelect('classes.user', 'users', 'classes.user = users.id')

      .getMany();

    return classes;
  }
}

export default ListClassesService;
