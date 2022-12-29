import { Link } from 'react-router-dom';

function card() {
  return (
    <>
      <button>
        <Link to="/">GET BACK</Link>
      </button>
      <div className="modal">
        <section className="modal__content ">
          <div className="modal__header">
            <h2 className="modal__title">Cocido madrileño</h2>
            <Link className="form__btn" to="/">
              Return
            </Link>
          </div>
          <section className="modal__section">
            <img
              src="https://img-global.cpcdn.com/recipes/recipes_40749_v1393351132_receta_foto_00040749/1280x1280sq70/photo.webp"
              alt="cocido"
              className="modal__img"
            />
            <ul className="card__description">
              <li>
                Cocido madrileño is a traditional chickpea-based stew from
                Madrid, Spain. A substantial dish prepared with meat and
                vegetables, it is most popular during the winter but is served
                throughout the year in some restaurants. Initially it was a dish
                for humble people, but it started to climb in society thanks to
                its inclusion in restaurant menus. The chickpea was introduced
                under Carthaginian rule, and was later used in medieval Spain.
                It is a dish normally eaten in winter, in the cold months of the
                year.
              </li>
              <li>Alérgenos || Si es o no vegano</li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Search?q=cocido%20madrile%C3%B1o&"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.tripadvisor.com/Search?q=cocido%20madrile%C3%B1o&
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </>
  );
}

export default card;
