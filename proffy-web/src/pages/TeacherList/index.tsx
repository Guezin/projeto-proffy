import React, { useState, useCallback, FormEvent } from 'react';

import api from '../../services/api';

import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  const handleSearchTeachers = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const { data } = await api.get('/classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(data);
    },
    [subject, week_day, time]
  );

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={event => setSubject(event.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Fisica', label: 'Educação Fisica' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Fisíca', label: 'Fisíca' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={event => setWeek_day(event.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={event => setTime(event.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
