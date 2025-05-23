import Image from "next/image";
import MealSearchInput from "./components/MealSearchInput";
import { Monoton } from "next/font/google";

const test = Monoton({
  variable: "--font-test",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Meals",
  description: "Trying to go to next level of my life",
};

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div className={`container mx-auto px-4 py-8 ${test.variable}`}>
      <div>
        <MealSearchInput />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals && meals.length > 0 ? (
          meals.map((meal) => {
            return (
              <div
                key={meal.idMeal}
                className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                  width={641}
                  height={641}
                />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">{meal.strMeal}</h2>
                  <p className="line-clamp-3">{meal.strInstructions}</p>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="mr-2">Category: {meal.strCategory}</span>
                    <span>Area: {meal.strArea}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-600 text-lg">
              No meals found. Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
