import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML/CSS'} description={'Knowledges'}/>
                    <Skill title={'JS'} description={'Knowledges'}/>
                    <Skill title={'React'} description={'Knowledges Knowledges Knowledges'}/>
                    <Skill title={'React'} description={'Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges Knowledges'}/>
                    <Skill title={'React'} description={'Knowledges Knowledges Knowledges'}/>
                </div>
            </div>
        </div>
    );
};
