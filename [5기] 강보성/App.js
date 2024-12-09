import EditorPage from './components/EditorPage.js'
import SidebarPage from './components/SidebarPage.js'
export default function App({ $target }) {
    const dummyData = [
        {
            id: 1,
            title: '노션을 만들자',
            documents: [
                {
                    id: 2,
                    title: '나는 타이틀이다',
                    documents: [
                        {
                            id: 3,
                            title: '나는 또 다른 타이틀이다',
                            documents: [],
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            title: 'helloworld!',
            documents: [],
        },
    ]

    const editorDummyData = {
        title: '나는 노션이다',
        content: '노션을만들자',
    }

    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($listContainer)
    $target.appendChild($editorContainer)

    const sidebarPage = new SidebarPage({
        $target: $listContainer,
        initalState: dummyData,
    })

    const editorPage = new EditorPage({
        $target: $editorContainer,
        initalState: editorDummyData,
    })
}
