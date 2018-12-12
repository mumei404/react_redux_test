import React from 'react';

/**
 * 今まではstoreがpropsに渡ってきて、そこかたgetState()してたが、
 * containersから成形されたオブジェクトがpropsとして渡ってきてる。
 * また、ActionCreatorやActionのdispatchもcontainersで行なっているので、
 * componentsはpropsのinputTaskやaddTaskを呼び出しているだけ。
 * コンポーネントのredux依存が消え、再利用性も高まる。
 */
export default function TodoApp({task, tasks, inputTask, addTask}) {
    return (
        <div>
            <input type="text" onChange={e => inputTask(e.target.value)} />
            <input type="button" value="add" onClick={() => addTask(task)} />
            <ul>
                {
                    tasks.map(function(item, i){
                        return (
                            <li key={i}>{item}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}