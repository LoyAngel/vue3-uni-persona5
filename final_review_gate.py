# final_review_gate.py
# 尝试使 stdout 立即输出，以实现更响应式的交互。
# 这可能在某些平台或 stdout 不是 TTY 的情况下不起作用，但这是个好习惯。
import sys
import os

if __name__ == "__main__":
    # 尝试使 stdout 立即输出。
    try:
        sys.stdout = os.fdopen(sys.stdout.fileno(), 'w', buffering=1)
    except Exception:
        pass  # 如果立即输出失败，请忽略，例如在某些环境中

    try:
        sys.stderr = os.fdopen(sys.stderr.fileno(), 'w', buffering=1)
    except Exception:
        pass  # 如果立即输出失败，请忽略

    print("--- 最终审查门激活 ---", flush=True)
    print("AI 已完成主要操作。等待您的审查或进一步的子提示。", flush=True)
    print("输入您的子提示，或输入 'TASK_COMPLETE'、'Done'、'Quit' 或 'q' 来表示完成。", flush=True)
    
    active_session = True
    while active_session:
        try:
            # 信号脚本已准备好接收输入。
            # AI 不需要解析这个，但对用户可见性有帮助。
            print("REVIEW_GATE_AWAITING_INPUT:", end="", flush=True)
            
            line = sys.stdin.readline()
            
            if not line:  # EOF
                print("--- 审查门：STDIN 已关闭 (EOF)，退出脚本 ---", flush=True)
                active_session = False
                break
            
            user_input = line.strip()
            
            # 检查退出条件
            if user_input.upper() in ['TASK_COMPLETE', 'DONE', 'QUIT', 'Q']:
                print(f"--- 审查门：用户以 '{user_input.upper()}' 信号完成 ---", flush=True)
                active_session = False
                break
            elif user_input:
                # 如果输入是文件名，尝试从当前目录读取文件内容
                try:
                    if os.path.isfile(user_input):  # 检查文件是否存在
                        with open(user_input, 'r', encoding='utf-8') as f:
                            file_content = f.read()
                            print(f"USER_REVIEW_SUB_PROMPT: {file_content[:500]}...（如果内容过长，仅显示前500字符）")
                    else:
                        print(f"USER_REVIEW_SUB_PROMPT: 文件 '{user_input}' 不存在或无法读取。")
                except Exception as e:
                    print(f"USER_REVIEW_SUB_PROMPT: 读取文件时出错：{e}")
            
        except KeyboardInterrupt:
            print("--- 审查门：用户中断会话 (KeyboardInterrupt) ---", flush=True)
            active_session = False
            break
        except Exception as e:
            print(f"--- 审查门脚本错误： {e} ---", flush=True)
            active_session = False
            break
            
    print("--- 最终审查门脚本已退出 ---", flush=True) 