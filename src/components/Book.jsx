import React from "react";

function Book() {
  return (
    <div class="product_body">
      <div class="product_description">
        <p>
          ASUS VivoBook 14 (2021), Intel Core i5-1135G7 11th Gen, 14-Inch (35.56
          cms) FHD Thin and Light Laptop (8GB RAM/1TB HDD + 256GB SSD/Office
          2019/Windows 10/Integrated/Silver/1.6 kg)
        </p>
      </div>
      <div class="product_price">
        <p>
          &#8377; <span>48,990</span>
        </p>
      </div>
      <ul class="rating d-flex">
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="far fa-star"></i>
        </li>
      </ul>
      <div class="product_img d-flex">
        <img src="Images/lap.jpg" alt="" />
      </div>
      <div class="button-cart d-flex">
        <a href="#">
          <button>Add To Busket</button>
        </a>
      </div>
    </div>
  );
}

export default Book;
