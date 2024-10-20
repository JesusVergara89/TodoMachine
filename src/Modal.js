import ReactDOM from "react-dom";

function Modal({children}) {
return ReactDOM.createPortal(
    <div style={{
        position: 'fixed',
        top: '15%',
        left: 'calc(50% - 100px)',
        width: '300px',
        height: '400px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {children}
    </div>,
    document.getElementById('modal')
);
}

export { Modal };