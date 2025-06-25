import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cards from "./Cards";

function trimText(text, maxWords = 40) {
  if (!text) return "";
  const plainText = text.replace(/<[^>]+>/g, "");
  const words = plainText.split(" ");
  if (words.length <= maxWords) return plainText;
  return words.slice(0, maxWords).join(" ") + " ...";
}

export default function CategoryContents() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("category");

  useEffect(() => {
    if (!categoryId) {
      setLoading(false);
      return;
    }

    setLoading(true);

    Promise.all([
      fetch("http://198.199.121.72/api/categories").then((res) => res.json()),
      fetch(`http://198.199.121.72/api/contents?category_id=${categoryId}`).then(
        (res) => res.json()
      ),
    ])
      .then(([catData, contentData]) => {
        setCategories(catData.data || []);
        let cont = contentData.data || [];
        if (!Array.isArray(cont)) cont = [cont];
        setContents(cont);
      })
      .catch(() => {
        setCategories([]);
        setContents([]);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>جاري التحميل...</p>;

  if (!categoryId) return <p>لم يتم اختيار تصنيف.</p>;

  const category = categories.find((c) => c.id === Number(categoryId));

  if (!category) return <p>لم يتم العثور على التصنيف.</p>;

  return (
    <div className="w-full p-6 px-4 sm:px-6">
      <h2
        className="text-2xl font-bold mb-4 text-right border-b-2 pb-1 font-tajawal sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32"
        style={{ color: "#E2A03F", borderColor: "#555555" }}
      >
        {category.name}
        <ArrowForwardIosIcon className="text-[#E2A03F] hover:text-white transition duration-300" />

      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-4 text-right sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        {contents.length === 0 && <p>لا توجد محتويات في هذا التصنيف.</p>}

        {contents.slice(0, 10).map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            title={item.title}
            content={{ type: "text", value: trimText(item.content) }}
          />
        ))}
      </div>
    </div>
  );
}
