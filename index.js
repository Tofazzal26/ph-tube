const buttondDataLoad = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );

  const data = await response.json();
  const categories = data.data;
  const btnContainer = document.getElementById("btn-container");
  categories.forEach((button) => {
    console.log();
    const newButton = document.createElement("button");
    newButton.classList.add(
      "btn",
      "btn-ghost",
      "bg-slate-700",
      "text-white",
      "text-lg"
    );
    newButton.innerText = `${button.category}`;
    btnContainer.appendChild(newButton);
  });
};

buttondDataLoad();
