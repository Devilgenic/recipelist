import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {

  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md: max-w-4xl sm:max-w-full ">
        <h2 className="text-4xl font-bold mb-12  text-gray-800">Recipes</h2>
        <Link href={'/'} className="mb-2 font-bold p-4 ml-2">Go Home</Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe-list/${recipe.id}`}>
                  <card>
                    <CardContent className=" bg-white rounded-md overflow-hidden shadow-md cursor-pointer">
                      <diV className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </diV>
                      <div className="p-6">
                        <h3 className="text-gray-900 font-bold text-lg">
                          {recipe.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center mt-4 gap-2">
                        <p className="text-lg text-gray-600">
                          Rating: {recipe.rating}
                        </p>

                        <div className="ml-auto">
                        <p className="text-lg text-gray-600 font-bold">
                          {recipe.cuisine}
                        </p>
                      </div>
                      </div>

                      
                    </CardContent>
                  </card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
