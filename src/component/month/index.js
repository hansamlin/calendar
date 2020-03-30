import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef
} from "react";
import styled, { keyframes } from "styled-components";
import { DateContext } from "../../store/dateContext";
import { DetailContext } from "../../store/detailContext";
import Week from "./week";
import moment from "moment";
import chunk from "lodash/chunk";
import { OpacityContext } from "../../store/opacityContext";
import { SumContext } from "../../store/sumContext";

export default () => {
  const { date, setDate } = useContext(DateContext);
  const { sum } = useContext(SumContext);
  const { show, setShow } = useContext(DetailContext);
  const { opacity, setOpacity } = useContext(OpacityContext);

  const item = useEffectItem(sum, opacity);

  const handleDetailShow = () => setShow(true);
  const handleTransitionEnd = useCallback(
    () => opacity === 0 && setOpacity(1),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [opacity]
  );

  const ref = useRef();
  useEffect(() => {
    if (ref.current && opacity === 1) {
      setDate(null);
    } else {
      ref.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opacity]);

  return (
    <Container
      theme={{ opacity }}
      className={show ? "" : "init"}
      onAnimationEnd={handleDetailShow}
      onTransitionEnd={handleTransitionEnd}
    >
      {item.map((element, index) => {
        const isFind = element.find(obj => {
          return obj.date === date;
        });

        return (
          <Week
            week={element}
            key={index}
            theme={{ margin: isFind && "0 0 75px" }}
          />
        );
      })}
    </Container>
  );
};

const useEffectItem = (sum, opacity) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (opacity === 1) {
      const datetime = moment().add(sum, "month");
      const daysInMonth = datetime.daysInMonth();

      let dayArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        dayArr.push({
          num: i,
          day: moment(datetime)
            .set("date", i)
            .format("ddd"),
          date: moment(datetime)
            .set("date", i)
            .format("Y-MM-DD"),
          active: true
        });
      }

      const firstDay = parseInt(
        moment(datetime)
          .set("date", 1)
          .format("d")
      );

      if (firstDay !== 0) {
        const prevDaysInMonth = moment(datetime)
          .subtract(1, "month")
          .daysInMonth();
        const end = prevDaysInMonth - firstDay;

        for (let i = prevDaysInMonth; i > end; i--) {
          const prev = moment()
            .subtract(1, "month")
            .set("date", i);

          dayArr = [
            {
              num: i,
              day: prev.format("ddd"),
              date: prev.format("Y-MM-DD"),
              active: false
            }
          ].concat(dayArr);
        }
      }

      const lastDay = parseInt(
        moment(datetime)
          .set("date", moment(datetime).daysInMonth())
          .format("d")
      );

      if (lastDay !== 6) {
        for (let i = 1; i <= 6 - lastDay; i++) {
          const next = moment(datetime)
            .add(1, "month")
            .set("date", i);

          dayArr.push({
            num: i,
            day: next.format("ddd"),
            date: next.format("Y-MM-DD"),
            active: false
          });
        }
      }

      const item = chunk(dayArr, 7);
      setItem(item);
    }
  }, [sum, opacity]);

  return item;
};

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const Container = styled.div`
  opacity: ${props => props.theme.opacity};
  width: 420px;
  margin: auto;
  background: #4a4a4a;
  transition: opacity 0.7s ease-out;

  &.init {
    animation: ${fadeIn} ease-out 1s both;
  }
`;
