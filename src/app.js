/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const domains = [
    {
      pronoun: ["the", "our"]
    },
    {
      adj: ["great", "big"]
    },
    {
      noun: ["jogger", "racoon"]
    },
    {
      dom: [".com", ".net", ".es", ".edu", ".org"]
    }
  ];

  let domainHTML = '<ul class="list-group">';

  for (let pronoun of domains[0].pronoun) {
    for (let adj of domains[1].adj) {
      for (let noun of domains[2].noun) {
        for (let dom of domains[3].dom) {
          domainHTML += `<li class="list-group-item">
            ${pronoun}${adj}${noun}${dom}
          </li>`;
        }
      }
    }
  }

  const dominios = document.querySelector("#domains");
  dominios.innerHTML = domainHTML;
};
