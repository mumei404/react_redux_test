import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

function mapStateToProps({task, tasks}) {
    return {
        task,
        tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTask(task) {
            dispatch(addTask(task));
        },
        inputTask(task) {
            dispatch(inputTask(task));
        }
    };
}

/**
 * TodoAppコンポーネントにはpropsとして以下の4つが渡される
 * task : フォームに入力されたタスク
 * tasks : タスクの配列
 * addTask : タスクを追加する関数
 * inputTask : タスクを入力する関数
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
