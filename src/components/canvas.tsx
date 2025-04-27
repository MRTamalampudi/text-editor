import { useDispatch } from "react-redux";
import React from "react";
import CanvasFormat from "../format/canvas";

export function Canvas() {
  const dispatch = useDispatch();
  return (
    <div
      id="canvas"
      className="w-4xl mt-2 h-full bg-white border border-gray-500 p-4 text-base
      text-clip overflow-y-scroll
      outline-none
      "
      contentEditable={true}
      onKeyDown={(event: React.KeyboardEvent) =>
        CanvasFormat.onKeyDown(event, dispatch)
      }
      onMouseUp={(event: React.MouseEvent) =>
        CanvasFormat.onMouseUP(event, dispatch)
      }
    >
      <div>
        The city awoke with the distant hum of traffic and the first light
        filtering through towering skyscrapers. Coffee shops opened their doors,
        releasing the rich aroma of freshly brewed beans into the crisp morning
        air. As commuters shuffled onto trains and buses, the pulse of another
        busy day in the metropolis began to beat faster and stronger.
      </div>
      <div>
        In the countryside, mist clung to the rolling hills like a soft,
        translucent blanket. Birds called to each other across fields dotted
        with wildflowers. Farmers readied their tools for a long day under the
        sun, while children, backpacks slung over their shoulders, wandered down
        narrow dirt paths toward a small school that stood proudly at the
        village center.
      </div>
      <div>
        The ocean roared against the rocky cliffs, spraying mist high into the
        air. Gulls swooped and cried overhead, while far below, colorful tide
        pools teemed with life. Small crabs scuttled between rocks, and sea
        anemones waved lazily with the rhythm of the water. The salt air
        invigorated every breath, carrying stories from across distant horizons.
      </div>
      <div>
        Deep within the ancient forest, shafts of sunlight pierced the dense
        canopy, illuminating patches of vibrant green moss. A family of deer
        moved silently between the trees, their presence barely a whisper
        against the backdrop of rustling leaves. Streams gurgled over stones
        worn smooth by centuries, creating a melody that echoed the timelessness
        of the woods.
      </div>
      <div>
        The desert stretched endlessly under a cloudless blue sky, its golden
        sands shifting like waves in the wind. Cacti stood as sentinels, their
        arms reaching toward the heavens. In the distance, a mirage shimmered,
        blurring the horizon. Travelers, few and far between, sought shade under
        sparse scrub, treasuring each precious drop of water carried along their
        journey.
      </div>
      <div>
        A festival brought color and laughter to the small town square. Banners
        flapped in the breeze, and the scent of sizzling food filled the air.
        Children darted between booths, their faces painted like tigers and
        butterflies. Musicians played lively tunes while dancers spun and
        leaped, their vibrant costumes swirling like living rainbows under the
        setting sun.
      </div>
      <div>
        As night fell, the sky transformed into a deep canvas of stars.
        Campfires crackled softly in the cool air, sending up wisps of smoke
        that faded into the darkness. Friends gathered close, sharing stories
        and laughter under thick woolen blankets. Somewhere in the distance, an
        owl hooted, a gentle reminder of the wild world surrounding them.
      </div>
    </div>
  );
}
