package tui

import "github.com/charmbracelet/lipgloss"

var (
	// Theme: warm neutral base with a rose accent, aligned with the bett brand.
	colorRose    = lipgloss.Color("#ff4d6d")
	colorRoseDim = lipgloss.Color("#ff8fa3")
	colorInk     = lipgloss.Color("#f2e9e4")
	colorMuted   = lipgloss.Color("#9a8c98")
	colorSurface = lipgloss.Color("#22223b")
	colorBorder  = lipgloss.Color("#4a4e69")
	colorSuccess = lipgloss.Color("#57cc99")
	colorWarning = lipgloss.Color("#ffb703")
	colorError   = lipgloss.Color("#ef233c")
)

var (
	titleStyle = lipgloss.NewStyle().
			Foreground(colorRose).
			Bold(true).
			MarginBottom(1)

	headerStyle = lipgloss.NewStyle().
			Foreground(colorInk).
			Bold(true)

	mutedStyle = lipgloss.NewStyle().
			Foreground(colorMuted)

	statusKeyStyle = lipgloss.NewStyle().
			Foreground(colorMuted)

	statusValStyle = lipgloss.NewStyle().
			Foreground(colorInk)

	okStyle = lipgloss.NewStyle().
		Foreground(colorSuccess).
		Bold(true)

	warnStyle = lipgloss.NewStyle().
			Foreground(colorWarning)

	errStyle = lipgloss.NewStyle().
			Foreground(colorError).
			Bold(true)

	menuItemStyle = lipgloss.NewStyle().
			Foreground(colorInk).
			Padding(0, 1)

	menuSelStyle = lipgloss.NewStyle().
			Foreground(colorRose).
			Background(colorSurface).
			Bold(true).
			Padding(0, 1)

	boxStyle = lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(colorBorder).
			Padding(1, 2)

	footerStyle = lipgloss.NewStyle().
			Foreground(colorMuted).
			MarginTop(1)

	spinnerStyle = lipgloss.NewStyle().
			Foreground(colorRose)

	activeStyle = lipgloss.NewStyle().
			Foreground(colorRose).
			Bold(true)

	subtleStyle = lipgloss.NewStyle().
			Foreground(colorMuted).
			Italic(true)
)
