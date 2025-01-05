import Image from "next/image";
const BlogSidebar = () => {
  const categories = [
    { id: 1, name: "Quick Meals Recipes", count: 37 },
    { id: 2, name: "Vegetarian Recipes", count: 197 },
    { id: 3, name: "Healthy Food Recipes", count: 36 },
    { id: 4, name: "Delicious Breakfast", count: 87 },
    { id: 5, name: "Fresh Beverages Recipes", count: 67 },
    { id: 6, name: "Crunchy Snacks Recipes", count: 40 },
    { id: 7, name: "Lunch Recipes", count: 150 },
  ];
  return (
    <aside className="flex justify-center items-center flex-col h-auto mb-4">
      <Image
        src="/sidebar-freezer-meals@2x.png"
        alt="Sidebar Image"
        height={500}
        width={400}
        quality={90}
        priority
        className="h-[500px] w-[460px] object-cover"
      />
      <div className="flex justify-center items-center flex-col mt-3 w-full gap-y-[4px]">
        <div className="bg-black/10 h-[45px] px-4 py-3 w-full md:w-[500px] lg:w-full">
          <p className="text-textColor font-bebasNeue lg:text-[12px] xl:text-[15px] tracking-wider font-black uppercase">
            Recipe Collections
          </p>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`bg-black/10 h-[45px] px-4 py-3 w-full lg:w-full md:w-[500px] flex justify-between items-center cursor-pointer`}
          >
            <div className="flex justify-start gap-[6px] items-center">
              <div className="w-[15px] h-[15px] rounded-full bg-textColor flex justify-center items-center">
                <p className="text-[10px] font-righteous text-white font-bold">
                  {category.id}
                </p>
              </div>
              <p className="text-textColor font-bebasNeue md:text-[16px] text-[14px] font-normal hover:text-hoverTextColor leading-[14px]">
                {category.name}
              </p>
            </div>
            <p className="text-[14px] font-bold text-black/35 font-righteous">
              {category.count}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default BlogSidebar;
