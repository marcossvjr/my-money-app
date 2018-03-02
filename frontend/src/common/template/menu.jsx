import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#/" label="Dashboard" icon="dashboard" />
        <MenuItem path="#/WR" label="Dashboard WR" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/billingCycles" label="Ciclos de pgtos" icon="usd" />
        </MenuTree>
    </ul>
)