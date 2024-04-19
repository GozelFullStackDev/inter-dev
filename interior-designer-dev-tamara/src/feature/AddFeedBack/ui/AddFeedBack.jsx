import { Button } from "../../../shared/ui/Button/Button";
import styles from './AddFeedBack.module.scss'

export const AddFeedBack = () => {
    return (
        <div className={styles.main}>
            <input placeholder="Добавить отзыв..." />
            <Button
                text={'+'}
                onClick={() => {}}
            />
        </div>
    );
};
