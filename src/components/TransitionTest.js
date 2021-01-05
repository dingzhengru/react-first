import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../transition.scss';

export default function TransitionTest() {
  const [isShowMessage, setIsShowMessage] = useState(false);

  //* Group
  const [itemList, setItemList] = useState([1, 2, 3]);

  return (
    <div>
      <div>
        <button onClick={() => setIsShowMessage(!isShowMessage)}>Toggle</button>
        <CSSTransition in={isShowMessage} timeout={300} classNames="fade" unmountOnExit>
          <span>Message {String(isShowMessage)}</span>
        </CSSTransition>
      </div>
      <div>
        <h2>TransitionGroup</h2>
        <ul>
          <TransitionGroup>
            {itemList.map(item => (
              <CSSTransition key={item} timeout={300} classNames="fade">
                <li>
                  {item} <button onClick={() => setItemList(itemList.filter(xx => xx != item))}>remove</button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
        <button onClick={() => setItemList([...itemList, itemList[itemList.length - 1] + 1])}>add</button>
      </div>
    </div>
  );
}
