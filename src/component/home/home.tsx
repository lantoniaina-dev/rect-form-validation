import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import dataMenus from '../../Data/homeJson.json'
import DlMenus from './dlMenus/dlmenus';
import { log } from 'console';
import { number } from 'yup';
import { nextTick } from 'process';
import { FormHome } from './form/form'
let Home: React.FC = () => {

    let boxelement = useRef<HTMLDivElement>(null);
    let [active, setActive] = useState<number | null>()
    let [lastActive, setLastActive] = useState<number | null>()

    useEffect(() => {

    }, []);

    let clickMenus = (index: number) => {
        console.log(index);
        setActive(index)
    }

    let overMenus = (index: number) => {
        let child = boxelement.current?.children[index] as HTMLElement | null;
        if (child) {
            try {
                child.className = "affiche-block";
            } catch (error) {
                console.warn("Error : ", error);
            }
        }
        setLastActive(active)
        setActive(null)
    }

    let leaveMenus = (index: number) => {
        let child = boxelement.current?.children[index] as HTMLElement | null;
        if (child) {
            try {
                child.className = "affiche-none";
            } catch (error) {
                console.warn("Error : ", error);
            }
        }
        active === null ? setActive(lastActive) : setActive(active)
    }

    return (
        <div className="App">
            <div className='box-menus'>
                <nav >
                    <div className='box-nav-men'>
                        {
                            dataMenus.map((data: any, index: number) => {
                                let myClass = ""
                                if (active === index) {
                                    myClass = "border-bottom"
                                }
                                return (
                                    <span className={data.class} onClick={() => { clickMenus(index) }} onMouseEnter={() => { overMenus(index) }} onMouseLeave={() => { leaveMenus(index) }} key={index}>
                                        <button className={myClass}> {data.title} </button>
                                    </span>
                                )
                            })
                        }
                    </div>
                </nav>
            </div>

            <div ref={boxelement} className='box-detail-menus' id="box-element">

                <div className='affiche-none '> <DlMenus step={"0"} title={"Assurance vie"} /></div>
                <div className='affiche-none '> <DlMenus step={"1"} title={"SCPI"} /></div>
                <div className='affiche-none '> <DlMenus step={"2"} title={"Plan d'epargne Retraite"} /></div>
                <div className='affiche-none '> <DlMenus step={"3"} title={"Bourse"} /></div>
                <div className='affiche-none '> <DlMenus step={"4"} title={"Defisocialisation"} /></div>

            </div>

            <div>
                <FormHome />
            </div>


        </div>

    )
}

export default Home;
