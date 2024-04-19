import { useHistory } from "react-router-dom";
import Button from "./Button";
import getRole from "../utils/getRole";

function Header() {
  const history = useHistory();
  const { name } = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("carrinho");
    history.push("/login");
  };

  return (
    <header class="bg-gray-800 w-full h-12 shadow-lg fixed top-0 z-50">
      <nav className="flex  h-12 w-full ">
        <div className=" flex w-1/2">
          <div className="w-1/2">
            {getRole() === "customer" && (
              <Button
                datatestid="customer_products__element-navbar-link-products"
                type="button"
                text="Produtos"
                name="orders"
                disabled={false}
                onClick={() => {
                  history.push("/customer/products");
                }}
                className=" h-full bg-green-500 items-center text-white rounded-none w-full hover:bg-green-600"
              />
            )}
          </div>
          <div className="bg-blue-500 w-full ">
            {getRole() !== "administrator" ? (
              <Button
                datatestid="customer_products__element-navbar-link-orders"
                type="button"
                text={getRole() === "customer" ? "Meus pedidos" : "Pedidos"}
                name="orders"
                disabled={false}
                onClick={() => {
                  history.push(`/${getRole()}/orders`);
                }}
                className="bg-green-800 text-white rounded-none h-full w-full hover:bg-green-900"
              />
            ) : (
              <button
                type="button"
                data-testid="customer_products__element-navbar-link-orders"
                className="bg-gray-700 text-white px-4 py-2 mt-0"
              >
                GERENCIAR USUÁRIOS
              </button>
            )}
          </div>
        </div>
        <div className="flex w-1/2">
          <div className="w-full flex">
            <span
              data-testid="customer_products__element-navbar-user-full-name"
              className="bg-violet-800 text-white w-full flex justify-center items-center"
            >
              {name}
            </span>
          </div>
          <div className=" flex w-1/6">
            <Button
              datatestid="customer_products__element-navbar-link-logout"
              type="button"
              text="Sair"
              name="logout"
              disabled={false}
              onClick={logout}
              className="bg-cyan-600 text-white w-full flex justify-center items-center hover:bg-cyan-700"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
