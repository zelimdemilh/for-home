import React, {FC, useState} from "react"
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss"
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={onToggle}>Toogle</Button>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
};

