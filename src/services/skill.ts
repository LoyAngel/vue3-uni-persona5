import { http } from '@/utils/http';
import type { Data } from '@/types/http';
import type { SkillMap, SkillData } from '@/types/data';
import { skillMapRoyal } from '@/data/SkillDataRoyal';
import translationFunc from '@/data/TranslationFunc';

/**
 * @Description: 获得技能图鉴
 * @return {Promise}
 */
export const getSkillMap = (): Promise<Data<SkillMap>> => {
    let res = Object.fromEntries(
        Object.entries(skillMapRoyal).map(([key, value]: [string, SkillData]) => [
            key,
            <SkillData>{
                ...value,
                name: translationFunc(key, 'Skill'),
                c_name: translationFunc(key, 'Skill'),
                c_element: translationFunc(value.element, 'Elem'),
                effect: translationFunc(key, 'SkillEfc', value.effect),
                personas: value?.personas
                    ? Object.fromEntries(
                          Object.entries(value.personas).map(([key, value]) => [
                              translationFunc(key, 'Persona'),
                              value
                          ])
                      )
                    : {},
                // 展开语法，避免无对象情况还会添加空对象
                ...(value.talk
                    ? {
                          talk: value.talk.match(/\(.*?\)/)
                              ? translationFunc(value.talk.match(/\((.*?)\)/)![1], 'Persona')
                              : ''
                      }
                    : {}),
                ...(value.fuse
                    ? {
                          fuse: (Array.isArray(value.fuse)
                              ? value.fuse
                              : value.fuse.split(',')
                          ).map((item) => translationFunc(item, 'Persona'))
                      }
                    : {})
            }
        ])
    );
    return new Promise<Data<SkillMap>>((resolve) => {
        resolve({
            code: '200',
            msg: 'success',
            result: res
        });
    });
};
