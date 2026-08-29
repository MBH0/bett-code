package app

import (
	"bytes"
	"strings"
	"testing"
)

// TestVersionFlag prints the version and exits cleanly.
func TestVersionFlag(t *testing.T) {
	var out, errW bytes.Buffer
	if err := Run([]string{"--version"}, &out, &errW); err != nil {
		t.Fatalf("Run --version error: %v", err)
	}
	if !strings.Contains(out.String(), "bett-ai-harness") {
		t.Errorf("version output = %q", out.String())
	}
}

// TestHelpFlag prints usage.
func TestHelpFlag(t *testing.T) {
	var out, errW bytes.Buffer
	if err := Run([]string{"--help"}, &out, &errW); err != nil {
		t.Fatalf("Run --help error: %v", err)
	}
	if !strings.Contains(out.String(), "Usage:") {
		t.Errorf("help output = %q", out.String())
	}
}

// TestUnknownFlag rejects unknown arguments with an error.
func TestUnknownFlag(t *testing.T) {
	var out, errW bytes.Buffer
	if err := Run([]string{"--bogus"}, &out, &errW); err == nil {
		t.Fatal("expected error for unknown flag")
	}
	if !strings.Contains(errW.String(), "unknown command") {
		t.Errorf("stderr = %q", errW.String())
	}
}
