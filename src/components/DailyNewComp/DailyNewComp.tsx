import React from 'react';
import RightDisPlay from './RightDisPlay';
// import LeftNavigate from '../GeneralProductMainBody/LeftNavigate';
// import { generalProductMainBodyUrl } from "@/constants";
interface Props {
}
const App: React.FC<Props> = (props) => {
    // const [firstLevelCategory, setFirstLevelCategory] = useState("")
    // const [secondLevelCategory, setSecondLevelCategory] = useState("")
    // const [param, setParam] = useState('');//左侧所搜兰按钮，可以直接按照该值去搜索
    // const [title, setTitle] = useState('レディース')//title就是用不到，两个组件差不多 懒得改来改去
    // const [totalSize, setTotalSize] = useState(0);//总数据
    // const [dataList, setDataList] = useState();//每次的具体数据
    // useEffect(() => {//这一个参数就行了，用于精确查找
    //     console.log('in2', param)
    // }, [param])


    return (
        <div style={{ display: 'flex', width: 1150, justifyContent: 'space-between', marginTop: 80 }}>
            {/* <LeftNavigate navLinkData={generalProductMainBodyUrl}
                setFirstLevelCategory={setFirstLevelCategory}
                setSecondLevelCategory={setSecondLevelCategory}
                setParam={setParam} setTitle={setTitle}
                productCnt={totalSize} /> */}
            <RightDisPlay />
        </div>
    )
};
export default App;