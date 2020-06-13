let images = [
  {
    url: 'https://images.unsplash.com/photo-1591685440380-f4881f94b89f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    text: 'Scene One',
    id: 1,

  }, {
    url: 'https://images.unsplash.com/photo-1590379492966-e076d8f84c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    text: 'Scene Two',
    id: 2,

  }, {
    url: 'https://images.unsplash.com/photo-1470165473874-023613603389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    text: 'Scene Three',
    id: 3,
  }, {
    url: 'https://images.unsplash.com/photo-1537367075546-0529d021d198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    text: 'Scene Four',
    id: 4,

  }, {
    url: 'https://images.unsplash.com/photo-1590755098163-d34c72438301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    text: 'Scene Five',
    id: 5,

  }, {
    url: 'https://images.unsplash.com/photo-1591792298578-2bf5eacbbded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    text: 'Scene Six',
    id: 6,

  }, {
    url: 'https://images.unsplash.com/photo-1591260201887-108bfc8c58a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    text: 'Scene seven',
    id: 7,

  }, {
    url: 'https://images.unsplash.com/photo-1591258630823-9dea862e78a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    text: 'Scene eight',
    id: 8,

  }];
const removeImage = function(id) {
  document.getElementById("imageHolder").innerHTML = "";
  const index = images.findIndex(it => it.id === id);
  if (index > -1) {
    images.splice(index, 1);
  }
  imageHolder(images);


};



const shuffleGallery = () => {
  document.getElementById("imageHolder").innerHTML = "";

  let currentIndex = images.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = images[currentIndex];
    images[currentIndex] = images[randomIndex];
    images[randomIndex] = temporaryValue;
  }
  imageHolder(images, false);
}
let imageHolder = (images = []) => {
  let holder = document.getElementById('imageHolder');

  for (let i = 0; i < images.length; i++) {
    holder.innerHTML += ` <div id=${i} class="column">
                <div class="flip-card">
                   <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img alt=${images[i].text} loading="progressive" src=${images[i].url} class="img-fluid">
                    </div>
                    <div class="flip-card-back">
                        <p>${images[i].text}</p>
                        <div class="pointer" onclick="removeImage(${images[i].id})">
                         <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19M8,19H16V12.2L10.46,9H8V19Z" />
</svg>
</div>
                    </div>
                  </div>
                </div>
            </div>`;
  }
};

window.onload = (() => imageHolder(images));
