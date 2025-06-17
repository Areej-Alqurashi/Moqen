import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

export default function CardsGrid() {
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState([]);
  const navigate = useNavigate();

  const categoriesToShow = [6, 7, 5];

  useEffect(() => {
    fetch("http://198.199.121.72/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data || []));

    fetch("http://198.199.121.72/api/contents")
      .then((res) => res.json())
      .then((data) => setContents(data.data || []));
  }, []);

  const getTop3ByCategory = (categoryId) =>
    contents
      .filter((item) => item.category_id === categoryId && item.is_hidden === 0)
      .slice(0, 3);

  const getCategoryName = (categoryId) =>
    categories.find((cat) => cat.id === categoryId)?.name || "بدون عنوان";

  return (
    <div className="w-full p-6 px-4 sm:px-6">
      {categoriesToShow.map((categoryId) => {
        const items = getTop3ByCategory(categoryId);
        const categoryName = getCategoryName(categoryId);

        if (items.length === 0) return null;

        return (
          <div key={categoryId} className="mb-20">
            <h2
              className="text-2xl font-bold mb-4 text-right border-b-2 pb-1 font-tajawal mt-0 mr-20 ml-20 cursor-pointer hover:text-yellow-600 transition"
              style={{ color: "#E2A03F", borderColor: "#555555" }}
              onClick={() => navigate(`/main?category=${categoryId}`)}
            >
              {categoryName}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mr-20 ml-20">
              {items.map((item) => (
                <Cards
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={{ type: "text", value: item.about ?? "" }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
