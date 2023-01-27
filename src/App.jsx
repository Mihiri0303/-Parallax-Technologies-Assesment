import React, { useEffect, useState } from "react";
import image01 from "../src/images/image01.jpg";
import image02 from "../src/images/image02.jpg";
import image03 from "../src/images/image03.jpg";

const SampleJson = [
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
    {
        images: [image01, image02, image03],
        id: 12,
        name: "283409",
        price: 234.12,
    },
];

function App() {
    const [cards, setCards] = useState([...SampleJson.slice(0, 8)]);

    useEffect(() => {
        const sliders = document.querySelectorAll(".slider");
        const intervals = [];
        for (const slider of sliders) {
            const images = slider.querySelectorAll("img");
            for (let i = 0; i < images.length; i++) {
                let currentIndex = 0;
                const interval = setInterval(() => {
                    const index = currentIndex % images.length;
                    for (const image of images) {
                        if (image !== images[index]) {
                            image.style.zIndex = 0;
                            setTimeout(() => {
                                image.style.left = "100%";
                            }, 500);
                        }
                    }
                    images[index].style.zIndex = 1;
                    images[index].style.left = 0;
                    currentIndex++;
                }, 5000);
                intervals.push(interval);
            }
        }
        return () => {
            intervals.forEach((intv) => {
                clearInterval(intv);
            });
        };
    }, [cards]);

    useEffect(() => {
        let page = 1;
        const handleScroll = (event) => {
            let timer;
            clearTimeout(timer);
            if (
                window.innerHeight + document.documentElement.scrollTop <=
                document.documentElement.offsetHeight - 10
            )
                return;
            timer = setTimeout(() => {
                const next = SampleJson.slice(8 * page, 8 * page + 8);
                if (next.length !== 0 && SampleJson.length >= 8 * page) {
                    setCards((prev) => [...prev, ...next]);
                }
                page++;
            }, 1000);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="grid grid-cols-4 gap-4 p-10 bg-gray-100">
                {cards.map((item, itemIndex) => (
                    <div
                        key={itemIndex}
                        className="bg-white shadow-md w-full rounded-md p-2"
                    >
                        <div className="w-full h-56 rounded-md relative overflow-hidden slider">
                            {item.images.map((image, imageIndex) => (
                                <img
                                    key={imageIndex}
                                    src={image}
                                    alt="..."
                                    className="w-full h-full object-cover absolute top-0 transition-all duration-500"
                                />
                            ))}
                        </div>
                        <div className="justify-center flex flex-col items-center">
                            <div className="font-medium">{item.id}</div>
                            <div className="text-blue-500">{item.name}</div>
                            <div className="font-medium">{item.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
