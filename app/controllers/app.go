package controllers

import "github.com/revel/revel"

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	return c.Render()
}

func (c App) Projects() revel.Result {
	return c.Render()
}

func (c App) Resume() revel.Result {
	return c.Render()
}
