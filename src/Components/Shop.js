import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaList, FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navigation from "./Navigaion";
import ProductCard from "./ProductCard";

const Shop = () => {
    // const dispatch = useDispatch();

    const [view, setView] = useState(4);

    const { products } = useSelector((state) => state.products);

    const listView = () => {
        setView(3);
    };

    return ( <
        >
        <
        Navigation / >
        <
        div className = 'flex flex-row  md:mx-14 mt-10' > { /* Categories Sidebar */ } <
        div className = 'flex flex-col w-1/4 p-4' >
        <
        h2 className = 'text-xl uppercase font-bold mb-2' > Categories < /h2>

        <
        ul className = 'list-none md:space-y-5 text-md font-medium text-slate-600 my-6' >
        <
        li >
        <
        a href = '# '
        className = '' >
        Cemeras <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Electronics <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Fashion <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Furniture <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Gaming <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Gifts & Gadgets <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Headphones <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Home & Garden <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Smartphones <
        /a> <
        /li> <
        li >
        <
        a href = '# '
        className = '' >
        Sports <
        /a> <
        /li> <
        /ul>

        { /* Dropdowns or Filter Ranges here */ } <
        h1 className = 'text-xl font-semibold' > Filter < /h1> <
        span className = 'text-sm font-medium mt-5' > Price < /span> <
        input type = 'range'
        name = ''
        id = ''
        className = 'mt-2' / > { /* ... */ } <
        /div>

        { /* Product Listing */ } <
        div className = 'flex flex-col w-3/4 p-4' >
        <
        div className = 'flex flex-row justify-between items-center mb-4' > { /* Sort Options */ } <
        div className = 'flex flex-row items-center' >
        <
        span className = 'font-medium mr-2' > Sort by: < /span> <
        select className = 'border rounded px-4 py-2' >
        <
        option value = 'price_asc' > Price: Low to High < /option> <
        option value = 'price_desc' > Price: High to Low < /option> <
        option value = 'name_asc' > Name: A to Z < /option> <
        option value = 'name_desc' > Name: Z to A < /option> <
        /select> <
        /div>

        { /* View Options */ } <
        div className = 'flex flex-row items-center md:space-x-4' >
        <
        button onClick = {
            () => listView() }
        className = 'text-blue-500' >
        <
        FaTh size = { 22 }
        /> <
        /button> <
        button className = 'text-blue-500' >
        <
        FaList size = { 22 }
        /> <
        /button> <
        /div> <
        /div>

        { /* Product Cards here */ } <
        div className = { `grid grid-cols-${view} gap-4` } > {
            products.map((product) => ( <
                ProductCard key = { product.id }
                product = { product }
                />
            ))
        } <
        /div> { /* Product Cards ends here */ }

        { /* Pagination */ } <
        div className = 'flex flex-row justify-center mt-4' >
        <
        button className = 'text-gray-400 mr-2' >
        <
        BiChevronLeft size = { 24 }
        /> <
        /button> <
        button className = 'text-gray-400 ml-2' >
        <
        BiChevronRight size = { 24 }
        /> <
        /button> <
        /div> <
        /div> <
        /div>

        <
        Footer / >
        <
        />
    );
};

export default Shop;