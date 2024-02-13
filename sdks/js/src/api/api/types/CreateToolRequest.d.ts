/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as JulepApi from "..";
export interface CreateToolRequest {
  /** Whether this tool is a `function` or a `webhook` (Only `function` tool supported right now) */
  type: JulepApi.CreateToolRequestType;
  /** Function definition and parameters */
  function: JulepApi.FunctionDef;
}
