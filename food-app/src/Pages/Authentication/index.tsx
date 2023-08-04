import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import "./authentication.scss";
import { Link } from "react-router-dom";

function Authentication() {
  return (
    <main className="authentication flex items-center	justify-evenly flex-col lg:flex-row">
      <Link to="/book-table">
        <div>
          <UserOutlined />
          <span className="title-color">
            User
          </span>
        </div>
      </Link>
      <Link to="/login">
        <div>
          <SettingOutlined />
          <span className="title-color">
            Admin
          </span>
        </div>
      </Link>
    </main>
  )
}

export default Authentication;