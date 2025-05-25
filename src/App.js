import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Seruling",
    price: 100000,
    description: 'Seruling adalah alat musik tiup yang terbuat dari bambu, logam, atau plastik. Alat ini menghasilkan suara saat udara ditiupkan ke dalam lubangnya dan diarahkan melalui celah sempit. Seruling biasanya memiliki beberapa lubang yang dapat ditutup atau dibuka untuk mengubah nada. Alat musik ini digunakan dalam berbagai genre musik, baik tradisional maupun modern...' ,
    image: "/assets/suling.jpg",
  },
  {
    id: 2,
    name: "Drum",
    price: 1000000,
    description: 'Drum set elektronik adalah alat musik perkusi modern yang terdiri dari pad karet atau mesh yang menghasilkan suara digital saat dipukul. Drum ini dilengkapi dengan berbagai komponen seperti snare, tom, bass, cymbal, dan hi-hat, serta terhubung ke modul suara. Cocok untuk latihan, rekaman, dan pertunjukan dengan kontrol volume yang lebih baik...',
    image: "/assets/drum.jpg",
  },
  {
    id: 3,
    name: " Gendang",
    price: 200000,
    description: 'Gendang adalah alat musik tradisional yang dimainkan dengan cara dipukul, biasanya menggunakan tangan atau stik. Terbuat dari kayu dengan bagian tengah yang dilubangi dan kedua ujungnya ditutup dengan kulit hewan, gendang menghasilkan bunyi ritmis yang digunakan untuk mengiringi tarian, nyanyian, atau upacara adat di berbagai budaya, terutama di Asia Tenggara',
    image: "/assets/gendang.jpg",
  },
    {
    id: 4,
    name: "Aangklung",
    price: 250000,
    description: 'Angklung adalah alat musik tradisional Indonesia yang terbuat dari bambu dan dimainkan dengan cara digoyangkan. Setiap angklung menghasilkan satu nada, sehingga biasanya dimainkan secara berkelompok untuk membentuk melodi. Alat musik ini berasal dari Jawa Barat dan telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda Dunia...',
    image: "/assets/angklung.jpg",
  },
    {
    id: 5,
    name: "Piano",
    price: 3000000,
    description: 'Piano adalah alat musik berdawai yang dimainkan dengan menekan tuts-tutsnya. Setiap tuts menggerakkan palu kecil yang memukul senar di dalam piano, menghasilkan suara. Piano dikenal karena jangkauan nadanya yang luas dan kemampuannya memainkan melodi serta harmoni secara bersamaan, sehingga sering digunakan dalam berbagai genre musik, mulai dari klasik hingga pop...',
    image: "/assets/piano.jpg",
  },
    {
    id: 6,
    name: "Gitar Aukistik",
    price: 500000,
    description: 'Gitar akustik adalah jenis gitar yang menghasilkan suara secara alami tanpa bantuan alat elektronik. Suara dihasilkan dari getaran senar yang diperkuat oleh bodi gitar yang berfungsi sebagai resonator. Gitar ini umumnya digunakan dalam berbagai genre musik seperti pop, folk, dan klasik...',
    image: "/assets/gitar.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Jual Beli Alat Musik </h1>
      <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Tutup Keranjang" : "Lihat Keranjang"}
      </button>
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
      <ProductList products={initialProducts} addToCart={addToCart} />
    </div>
  );
}

export default App;
