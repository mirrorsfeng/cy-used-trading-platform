import { Input } from 'antd';
import styles from './index.less';


const { Search } = Input;


export default function Portal() {


  const onSearch = () => {
    console.log("search");
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.header}>
      <Search placeholder="搜索你想要的"
              onSearch={onSearch} 
              enterButton
              className={styles.searchInput} 
      />
      </div>
      <div className={styles.bodyDiv}>

      </div>
    </div>
  );
}
