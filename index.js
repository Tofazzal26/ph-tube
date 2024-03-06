const buttonDataLoad = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );

  const data = await response.json();
  const categories = data.data;
  const btnContainer = document.getElementById("btn-container");
  categories.forEach((button) => {
    const newButton = document.createElement("button");
    newButton.classList.add(
      "btn",
      "btn-ghost",
      "bg-slate-700",
      "text-white",
      "text-lg"
    );
    newButton.innerText = `${button.category}`;
    newButton.addEventListener("click", () => cardDataLoad(button.category_id));
    btnContainer.appendChild(newButton);
  });
};

const firstDataLoad = 1000;

const cardDataLoad = async (id) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await response.json();
  const cardData = data.data;
  cardData.forEach((cards) => {
    let verifyBadge = "";
    if (cards.authors[0].verified) {
      verifyBadge = `<img class="w-6 h-6" src="./images/verify.png" alt="" />`;
    }
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
    <div class="card w-full bg-base-100 shadow-xl">
    <figure class="overflow-hidden h-72">
      <img class="w-full" src="${cards.thumbnail}" alt="Shoes" />
      <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
    </figure>
    <div class="card-body">
      <div class="flex space-x-4 justify-start items-start">
        <div>
          <img
            class="w-12 h-12 rounded-full"
            src="${cards.authors[0].profile_picture}"
            alt="Shoes"
          />
        </div>
        <div>
          <h2 class="card-title">${cards.title}</h2>
          <div class="flex mt-3">
            <p class="">${cards.authors[0].profile_name}</p>
            ${verifyBadge}
          </div>
          <p class="mt-3">${cards.others.views} Views</p>
        </div>
      </div>
    </div>
  </div>
    `;
    cardContainer.appendChild(cardDiv);
  });
};

cardDataLoad(firstDataLoad);

buttonDataLoad();
