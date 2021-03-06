import FilmsCard from '../../components/films-card/films-card';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

const NUMBER_FILMS = 20;

function getItemsMenuGenres(genres: string[]): string[] {
  return ['All Genres', ...genres];
}

type MainProps = {
  filmPromo: {
    title: string,
    genre: string,
    release: number
  },
  genres: string[]
}

function Main({ filmPromo, genres }: MainProps): JSX.Element {
  const { title, genre, release } = filmPromo;

  const films: JSX.Element[] = [];

  for (let i = 0; i < NUMBER_FILMS; i++) {
    films.push(<FilmsCard key={i} />);
  }

  const menuGenres = getItemsMenuGenres(genres);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />{/* отключить переход по ссылке */}
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/#" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{release}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              menuGenres.map((el) => (
                <li key={el} className="catalog__genres-item catalog__genres-item--active">
                  <a href="/#" className="catalog__genres-link">{el}</a>
                </li>
              ))
            }
          </ul>

          <div className="catalog__films-list">
            {
              films.map((el) => el)
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />{/* отключить переход по ссылке */}
      </div>
    </>
  );
}

export default Main;
