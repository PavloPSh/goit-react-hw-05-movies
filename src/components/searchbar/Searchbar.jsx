import { useState } from "react";
import PropTypes from 'prop-types';

import { FcSearch } from "react-icons/fc";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from "Box";
import { SearchButton,SearchInput } from "./SearchBar.styled";

export const Searchbar = ({ value, onSubmit }) => {

    const [search, setSearch] = useState(value);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (search.trim() === '') {
            return toast.error('Try to find something...');
        };

        onSubmit(search.trim());
    }


    return (
        <>
            <Box as='form' pt='32px' display='flex' justifyContent='center' onSubmit={handleSubmit}>
                <SearchInput
                    onChange={handleChange}
                    name='search'
                    value={search}
                    placeholder='Search movie'
                    type="text"
                    autoComplete='off'
                    autoFocus
                />
                
                <SearchButton type="submit"><FcSearch size='24px'></FcSearch></SearchButton>
            </Box>
        </>
    )
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string
}