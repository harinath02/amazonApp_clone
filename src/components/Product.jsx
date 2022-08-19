import React from "react";
import Book from "./Book";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <div class="product_body">
          <div class="product_description">
            <p>
              Pigeon by Stovekraft Large Handy and Compact Chopper with 3 blades
              for effortlessly chopping vegetables and fruits for your kitchen
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>395</span>
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
            <img src="Images/mixer.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Busket</button>
            </a>
          </div>
        </div>
        <div class="product_body">
          <div class="product_description">
            <p>Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor</p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>2500</span>
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
            <img src="Images/product3.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Busket</button>
            </a>
          </div>
        </div>
      </div>

      <div class="product_row d-flex">
        <div class="product_body">
          <div class="product_description">
            <p>
              Beardo XXtra Stronghold Hair Wax, 100 gm | Crystal Hair Wax for
              Men | Glossy Finish | Hair Style, Shine | Extra Strong Hold
              Styling Hair Wax
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>340</span>
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
            <img src="Images/prod4.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Busket</button>
            </a>
          </div>
        </div>
        <div class="product_body">
          <div class="product_description">
            <p>
              New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th
              Generation)
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>10000</span>
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
            <img src="Images/product5.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Busket</button>
            </a>
          </div>
        </div>
      </div>
      <div class="product_row d-flex">
        <div class="product_body">
          <div class="product_description">
            <p>
              Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra
              Wide Dual WQHD 5120 x 1440
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>25099</span>
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
            <img src="Images/product6.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Busket</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
