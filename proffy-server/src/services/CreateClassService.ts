import { getConnection } from 'typeorm';

import convertHourToMinutes from '../utils/convertHourToMinutes';

import User from '../entities/User';
import Class from '../entities/Class';
import ClassesSchedules from '../entities/ClassesSchedules';

interface ISchedule {
  week_day: number;
  from: string;
  to: string;
}

interface IRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: ISchedule[];
}

class CreateClassService {
  public async execute({
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  }: IRequest): Promise<string> {
    const trx = getConnection().createQueryRunner();

    await trx.connect();
    await trx.startTransaction();

    try {
      const user = await trx.manager
        .getRepository(User)
        .save({ name, avatar, whatsapp, bio });

      const _class = await trx.manager
        .getRepository(Class)
        .save({ user_id: user.id, subject, cost });

      const classSchedule = schedule.map(scheduleItem => {
        return {
          class_id: _class.id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx.manager.getRepository(ClassesSchedules).save(classSchedule);

      await trx.commitTransaction();
    } catch (err) {
      console.log(err);
      await trx.rollbackTransaction();

      throw new Error('Error ao criar uma aula');
    } finally {
      await trx.release();
    }

    return 'Registro realizado com sucesso!';
  }
}

export default CreateClassService;
