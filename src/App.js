import React from 'react';
import WhiteSquare from './WhiteSquare';
import BlackSquare from './BlackSquare';
import './style.css';

const singleRowArray = Array.from({ length: 8 }, (item, index) => index + 1);
const singleColArray = Array.from({ length: 8 }, (item, index) => index + 1);

export default function App() {
  return (
    <div className="chessPalette">
      {singleColArray.map((eachCol) => {
        return (
          <div className="chessPalette_row">
            {singleRowArray.map((eachCell) => {
              return (
                <div>
                  {(eachCol + eachCell) % 2 == 0 ? (
                    <BlackSquare />
                  ) : (
                    <WhiteSquare />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
