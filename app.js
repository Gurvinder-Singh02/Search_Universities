let btn = document.querySelector("button");
let list = document.querySelector("ol");

let url = "http://universities.hipolabs.com/search?country=";

btn.addEventListener("click", async () => {
  country = document.querySelector("#country").value;
  query = url + country;
  await getColleges(query);
});

async function getColleges(url) {
  try {
    let resData = await fetch(url);
    let jsonData = await resData.json();
    console.log(jsonData);
    if (jsonData.length > 0) {
      addToList(jsonData);
    } else {
      list.innerHTML = `<li><h2 class="Head"> No Result Found .. </h2></li>`;
      throw "Wrong parameters";
    }
  } catch (e) {
    console.error(e);
  }
}

function addToList(colleges) {
  list.innerHTML = null;
  for (college of colleges) {
    let li = document.createElement("li");

    let name = document.createElement("p");
    name.classList.add("Head");
    name.innerText = college.name;

    let state = document.createElement("p");
    state.classList.add("state");
    state.innerText = college["state-province"];

    li.appendChild(name);
    li.appendChild(state);
    list.appendChild(li);
  }
}
