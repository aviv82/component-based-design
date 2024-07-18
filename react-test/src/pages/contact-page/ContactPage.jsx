// import { ContactDetail } from "../../components/contact/ContactDetail";
import { CONTACTS } from "../../consts/contacts";

import { Link } from "react-router-dom";

export const ContactPage = ({ header = "" }) => {
  return (
    <div>
      <h1>{header}</h1>
      <div>
        <ul>
          {CONTACTS.map((c, i) => (
            <li key={i}>
              <Link to={`${c.id}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <Routes>
        {CONTACTS.map((c, i) => (
          <Route
            key={i}
            path={`${c.id}`}
            element={<ContactDetail name={c.name} />}
          />
        ))}
      </Routes> */}
    </div>
  );
};
