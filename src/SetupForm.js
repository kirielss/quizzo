import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>
            Configure seu Quiz <br />
            em Inglês
          </h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">Número de perguntas</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          {/* category */}

          <div className="form-control">
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="books">Livros</option>
              <option value="films">Filmes</option>
              <option value="games">Jogos</option>
              <option value="sports">Esportes</option>
              <option value="history">História</option>
              <option value="politics">Politica</option>
              <option value="geo">Geografia</option>
            </select>
          </div>
          {/* difficulty */}

          <div className="form-control">
            <label htmlFor="difficulty">Selecione a dificuldade</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">fácil</option>
              <option value="medium">medio</option>
              <option value="hard">dificil</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Não foi possível gerar seu quiz, tente novamente
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            começar
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
