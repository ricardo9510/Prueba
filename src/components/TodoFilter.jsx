import { Link } from "react-router-dom";

const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                <Link to='/'>
                    <button
                        className={`${filter === "all"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                            }`}
                        onClick={() => changeFilter("all")}
                    >
                        Todas
                    </button>
                </Link>
                <Link to='pendientes'>
                    <button
                        className={`${filter === "active"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                            }`}
                        onClick={() => changeFilter("active")}
                    >
                        Pedientes
                    </button>
                </Link>
                <Link to='/completadas'>
                    <button
                        className={`${filter === "completed"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500"
                            }`}
                        onClick={() => changeFilter("completed")}
                    >
                        Completadas
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default TodoFilter;
