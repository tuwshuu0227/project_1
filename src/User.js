function User() {
  return (
    <div className="user-main">
      <div className="user-side-menu">
        <div className="menu-header">
          <div className="logo">
            <i className="fas fa-power-off fa-2x"></i>
            <h4>VIRTUOSO</h4>
          </div>
          <div className="user-name">
            <i className="far fa-user-circle fa-2x"></i>
            <p>Төгөлдөр</p>
          </div>
        </div>
        <div className="menu-content">
          <ul className="menu-list">
            <li>
              <i className="fas fa-chart-line"></i>
              <p>Дашбоард</p>
            </li>
            <li className="li-active">
              <i className="fas fa-user"></i>
              <p>Хэрэглэгч</p>
            </li>
            <li>
              <i className="fas fa-shopping-basket"></i>
              <p>Төхөөрөмж</p>
            </li>
            <li>
              <i className="fas fa-wallet"></i>
              <p>Төлбөр тооцоо</p>
            </li>
            <li>
              <i className="fas fa-robot"></i>
              <p>Автомат</p>
            </li>
            <li>
              <i className="fas fa-bell"></i>
              <p>Мэдэгдэл</p>
              <span className="badge rounded-pill bg-danger">2</span>
            </li>
            <li>
              <i className="fas fa-cog"></i>
              <p>Тохиргоо</p>
            </li>
          </ul>
        </div>
        <div className="exit">
        <i className="fas fa-power-off"></i>
          <p>Гарах</p>
        </div>
      </div>
      {/* Right side */}
      <div className="user-container">
        <div className="top">
          <h2>Хэрэглэгч</h2>
        </div>
        <div className="middle">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fas fa-search"></i>
            </span>
            <input
              className="input form-control"
              placeholder="Хайх зүйлээ энд бичнэ үү..."
            />
            <span className="input-group-text search">Хайх</span>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i>
            Хэрэглэгч нэмэх
          </button>
        </div>
        <div className="bottom">
          <table className="table table-borderless">
            <thead className="table-header">
              <tr>
                <th scope="row">№</th>
                <td>Гэрээний дугаар</td>
                <td>Овог</td>
                <td>Нэр</td>
                <td>Ашиглаж буй төхөөрөмжийн тоо</td>
                <td>Үйлчилгээний төрөл</td>
                <td>Идэвхтэй эсэх</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>10010011</td>
                <td>Наранбаатар</td>
                <td>Анхбаяр</td>
                <td>10</td>
                <td>Агааржуулалт</td>
                <td>Тийм</td>
                <td>
                  <i className="fas fa-times-circle"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>10010012</td>
                <td>Энхбаатар</td>
                <td>Төгөлдөр</td>
                <td>10</td>
                <td>Халаалт</td>
                <td>Тийм</td>
                <td>
                  <i className="fas fa-times-circle"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
