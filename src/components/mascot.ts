import { consume } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Colors, colorContext } from "../store/store-context";

@customElement("mascot-svg")
class SvgComponent extends LitElement {
  @property({ type: String }) width = "30";
  @property({ type: String }) height = "30";

  @consume({ context: colorContext, subscribe: true })
  @property({ attribute: false })
  public colors?: Colors;

  protected render(): unknown {
    return html`
      <?xml 
      version="1.0" 
      encoding="UTF-8"?>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 523.54 351.8"
      >
        <defs>
          <style>
            .cls-1 {
              fill: none;
              isolation: isolate;
            }
            .cls-2 {
              fill: ${this.colors?.primarycolor};
              opacity: 0.4;
            }
            .cls-3 {
              fill: #d1d1d1;
            }
            .cls-4 {
              fill: #9b9b9b;
            }
            .cls-4,
            .cls-5 {
              mix-blend-mode: multiply;
              opacity: 0.46;
            }
            .cls-5 {
              fill: #2b2b2b;
            }
          </style>
        </defs>
        <g class="cls-1">
          <g id="Layer_1">
            <ellipse
              class="cls-2"
              cx="264.83"
              cy="184.99"
              rx="246.53"
              ry="110.72"
            />
            <path
              class="cls-3"
              d="m47.08,236.94c4.37,3.69,9.2,7.25,14.44,10.68-12.77-36.74-18.3-77.53-16.97-112.41-4.03,3.59-7.63,7.29-10.79,11.09.11,28.76,4.47,60.51,13.32,90.64Z"
            />
            <path
              class="cls-3"
              d="m495.82,146.22c-3.17-3.81-6.79-7.52-10.84-11.11,2.07,35.21-4.99,76.7-19.06,113.94,5.46-3.45,10.49-7.05,15.05-10.77,9.86-30.71,15-63,14.85-92.05Z"
            />
            <path
              class="cls-3"
              d="m331.83,341.81c-45.66-6.33-91.99-7.31-138.03-2.84-105.88,10.29-143.56-148.3-128.46-228.12,7.7-40.7,53.06-69.87,91.36-78.93,69.41-16.42,143.56-17.45,213.33-2.81,37.44,7.97,74.47,33.37,89.04,69.87,30.45,76.25-23.82,257.17-127.25,242.82Z"
            />
            <path
              class="cls-4"
              d="m459.08,99c-7.21-18.04-19.9-33.37-35.41-45.22,5.21,6.94,9.56,14.5,12.79,22.6,30.45,76.25-23.82,257.17-127.25,242.82-45.66-6.33-91.99-7.31-138.03-2.84-25.12,2.44-46.4-4.62-64.05-17.88,21,27.08,49.67,44.1,86.67,40.5,46.04-4.47,92.36-3.5,138.02,2.84,103.43,14.35,157.7-166.57,127.25-242.82Z"
            />
            <path
              class="cls-2"
              d="m365.98,267.43c-17.64,6.85-36.53,11.06-53.93,13.44-55.39,7.59-121.9,3.62-170.44-26.46-21.8-13.51-38.73-33.68-42.83-59.56-.33-2.08-.66-4.17-.99-6.25-7.83-49.45,28.3-94.84,78.22-98.72,60.2-4.68,120.67-4.68,180.87,0,49.92,3.88,86.05,49.27,78.22,98.72-.31,1.96-.62,3.92-.93,5.89-5.95,37.54-34.84,59.98-68.19,72.94Z"
            />
            <path
              class="cls-5"
              d="m313.15,218.47c0,14.26-19.85,39.1-44.34,39.1s-44.34-24.84-44.34-39.1,19.85-12.58,44.34-12.58,44.34-1.69,44.34,12.58Z"
            />
            <path
              class="cls-5"
              d="m204.97,156.78c0,13.57-6.38,24.58-14.26,24.58s-14.26-11-14.26-24.58,6.38-24.58,14.26-24.58,14.26,11.01,14.26,24.58Z"
            />
            <path
              class="cls-5"
              d="m353.06,156.78c0,13.57-6.38,24.58-14.26,24.58s-14.26-11-14.26-24.58,6.38-24.58,14.26-24.58,14.26,11,14.26,24.58Z"
            />
          </g>
        </g>
      </svg>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "mascot-svg": SvgComponent;
  }
}
