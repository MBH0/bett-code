//go:build windows

package engram

import "syscall"

func detachAttr() *syscall.SysProcAttr {
	return &syscall.SysProcAttr{CreationFlags: 0x00000008 /* DETACHED_PROCESS */}
}
