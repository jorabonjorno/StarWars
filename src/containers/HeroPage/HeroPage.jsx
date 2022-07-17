import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import HeroList from '@components/HeroPage/HeroList'
import HeroNavigation from '@components/HeroPage/HeroNavigation'
import { useQueryParams } from "@hooks/useQueryParams";
import { getApiResourse, changeHTTP } from '@utils/network'
import {getHeroId, getHeroImage, getHeroPageId} from "@services/getHeroData";
import { API_PEOPLE } from "@constants/api";



import styles from './HeroPage.module.css';

const HeroPage = ({setErrorApi}) => {
    const [hero, setHero] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')
    const getResponse = async (url) => {
         const res = await getApiResourse(url)
        if (res) {
            const heroList = res.results.map(({ name, url }) => {
                const id = getHeroId(url)
                const img = getHeroImage(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setHero(heroList)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getHeroPageId(url))
        }
            setErrorApi(!res)
    };
    useEffect(() => {
        getResponse(API_PEOPLE+queryPage)
    },[])

    return (
        <>
            <HeroNavigation
                getResponse={getResponse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {hero && <HeroList hero={hero}/>}
        </>
    )
}

HeroPage.propTypes = {
    setErrorApi: PropTypes.func,
}
export default withErrorApi(HeroPage);
