import React, { useCallback } from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface ITeacher {
  id: string;
  class_id: {
    cost: number;
    subject: string;
    user: {
      id: string;
      name: string;
      avatar: string;
      whatsapp: string;
      bio: string;
    };
  };
}

interface ITeacherProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherProps> = ({ teacher }) => {
  const handleCreateNewConnection = useCallback(async () => {
    await api.post('/connections', {
      user_id: teacher.class_id.user.id,
    });
  }, [teacher]);

  return (
    <article className="teacher-item">
      <header>
        <img
          src={teacher.class_id.user.avatar}
          alt={teacher.class_id.user.name}
        />

        <div>
          <strong>{teacher.class_id.user.name}</strong>
          <span>{teacher.class_id.subject}</span>
        </div>
      </header>

      <p>{teacher.class_id.user.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.class_id.cost}</strong>
        </p>

        <a
          href={`https://wa.me/${teacher.class_id.user.whatsapp}`}
          target="_blank"
          rel="noopener noreferre"
          onClick={handleCreateNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
