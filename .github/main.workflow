workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@92bd3e50cb4f2b64a6a37d20db2cf723e08f1f7f"
}
