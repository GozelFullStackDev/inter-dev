import { FeedbacskList } from '../../entities/Feedbacks/ui/FeedbacskList/FeedbacskList';
import { AddFeedBack } from '../../feature/AddFeedBack/ui/AddFeedBack';
import styles from './MainPage.module.scss';

export const MainPage = () => {
    return (
        <div className={styles.main}>
            <FeedbacskList />
            <AddFeedBack />
        </div>
    )
};
