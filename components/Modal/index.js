import { Drawer } from '@material-ui/core';

function MyDrawer({ open, toggleModal }) {
  return (
    <Drawer anchor='left' open={open} keepMounted disablePortal>
      <button onClick={toggleModal}>X</button>
      <h1>Drawer</h1>
      <p>Conteúdo relevante para SEO</p>
      <ul>
        <li>Favoritos</li>
        <li>Listas</li>
        <li>Alertas</li>
      </ul>
    </Drawer>
  );
}

export default MyDrawer;
